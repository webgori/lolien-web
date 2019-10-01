<template>
  <v-app>
    <v-container
      class="contens"
      bg
      fill-height
      grid-list-lg
      text-lg-left
    >
      <v-layout
        row
        wrap
        align-content-start
      >
        <v-flex lg12>
          <h2>1. 가입 조건</h2>
          
          <p>
            롤리앙은 클리앙 이용자 중 롤을 즐기는 모든 사람이 자유롭게 이용 할 수 있습니다.
            <br>
            클리앙 가입 후 15일이 경과하여, 정상적인 글쓰기가 가능한 당원이어야 합니다.
          </p>
        </v-flex>

        <v-flex lg12>
          <h2>2. 가입 절차</h2>

          <ol>
            <li>
              <a
                href="https://clien.net"
                target="_blank"
              >클리앙</a> 커뮤니티 가입 (이미 가입되어 있고, 가입 후 15일이 경과하였으면 2번으로 이동)
            </li>

            <li>
              <a
                href="https://goo.gl/forms/CsTQeq2FmcdIEG2J3"
                target="_blank"
              >가입 신청서</a> 작성
            </li>

            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1QEoTuk_e7HLsSX9pnKJvKEt8yjxJJB1lS3aCwUottY4/edit?usp=sharing"
                target="_blank"
              >가입 여부</a> 확인
            </li>

            <li>
              가입 여부 확인 되었으면 <a
                href="https://www.clien.net/service/board/cm_lol"
                target="_blank"
              >LoLien 게시판</a> 이동 후
              간단한 소개글을 "가입인사" 카테고리로 등록
            </li>
          </ol>

          <br>

          <p>
            * 삭제, 수정, 이의 있을경우 셀클릭 - 오른쪽버튼 - 댓글삽입 - 삭제요청 및 수정
            관리자가 확인 후 삭제 및 수정 진행
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: "Join",
    components: {},
    props: {
      source: {
        type: String,
        default: ""
      },
    },
    data: () => ({
      
    }),
    created () {
      /*this.$vuetify.theme.dark = true*/
    },
    methods: {
      test: function (event) {
        alert(event);
      }
    },
  }
</script>