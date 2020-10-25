<template>
  <div class="example-drag">
    <v-dialog v-model="addedResultDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">확인</v-card-title>

        <v-card-text>
          내전 결과가 등록되었습니다.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="addedResultDialog = false">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
      <h3>이곳으로 파일을 드래그 해주세요</h3>
    </div>
    <template v-if="files.length">
      <v-data-table
        dense
        :headers="headers"
        :items="files"
        item-key="name"
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:[`item.size`]="{ item }">
          {{ item.size | formatSize }}
        </template>
      </v-data-table>
      <v-btn class="mt-5" color="info" @click="resultFileUpload()">
        <v-icon style="margin-right:5px;">fas fa-arrow-circle-up</v-icon>내전
        결과 등록
      </v-btn>
    </template>
    <template v-else>
      <!-- 파일이 없을때 -->
      <FileUpload
        class="btn btn-primary"
        :multiple="true"
        :drop="true"
        :drop-directory="true"
        v-model="files"
        ref="upload"
        extensions="rofl"
        accept=".rofl"
        :size="1024 * 1024 * 15"
      />
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <div class="text-center p-5 black--text">
            <p
              >등록하실 내전 리플레이 파일을 이곳으로 드래그 앤 드롭
              해주시거나<br />아래의 버튼을 클릭하여 파일을 선택 해주세요</p
            >
            <v-btn
              v-if="$vuetify.breakpoint.xs"
              small
              style="padding:0px;"
              color="info"
            >
              <label for="file" style="padding:0px 8px;"
                ><v-icon style="margin-right:5px;">fas fa-plus-circle</v-icon
                >내전 리플레이 파일을 선택해 주세요</label
              >
            </v-btn>

            <v-btn v-else style="padding:0px;" color="info">
              <label for="file" style="padding:0px 8px;"
                ><v-icon style="margin-right:5px;">fas fa-plus-circle</v-icon
                >내전 리플레이 파일을 선택해 주세요</label
              >
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import FileUpload from "vue-upload-component";
import axios from "axios";

export default {
  name: "Member",
  components: { FileUpload },
  props: {},
  created() {},
  data: () => ({
    files: [], //파일 변수
    headers: [
      //파일 업로드 후 테이블 영역 헤더부분
      { text: "리플레이 파일 이름", value: "name" },
      { text: "파일 크기", value: "size" }
    ],
    addedResultDialog: false
  }),
  methods: {
    resultFileUpload() {
      //업로드 처리로직

      let formData = this.getFormData();

      axios
        .post("https://api.lolien.kr/v1/custom-game/result/files", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          let status = response.status;

          if (status === 200) {
            this.addedResultDialog = true;
            this.$eventBus.$emit("hideFileUploadDialog");
          }
        })
        .catch(error => {
          // handle error
          if (error.response) {
            let status = error.response.status;

            if (status === 400) {
              let message = error.response.data.message;
              alert(message);
            }
          }
        })
        .then(() => {
          // always executed
          this.clearFiles();
        });
    },
    getFormData() {
      let formData = new FormData();

      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files", file.file);
      }

      return formData;
    },
    clearFiles() {
      this.files = [];
    }
  }
};
</script>
