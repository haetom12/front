  'use strict';

  function inputCheck() { 
    let regMid = /\w/gm;  //아이디는 영문소문자,대문자,숫자,밑줄만 사용가능
    let regpwd = /\w/gm;  //아이디는 영문소문자,대문자,숫자,밑줄만 사용가능
    let regName = /^[a-zA-Z가-힣]{2,20}$/gm; // 성명은 한글/영문만 가능하도록 길이는 2~20자까지
    let regTel = /\d{2,3}-\d{3,4}-\d{4}$/g; //전화번호 형식에 맞도록 체크 (지역번호-국번-전화번호)
    let regEmail = /^[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]{3}$/gm; //이메일 형식에 맞도록 체크(a@b.c)

    let mid = document.getElementById("mid").value;
    let pwd = document.getElementById("pwd").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("tel").value;
    let email = document.getElementById("email").value;

    if(mid.trim()=="") {
      alert("아이디를 입력하세요")
      return;
    }
    else if(!mid.match(regMid)) {
      alert("아이디는 영문소문자,대문자,숫자,밑줄만 사용가능 합니다")
      return;
    }
    else if(pwd.trim()=="") {
      alert("비밀번호를 입력하세요")
      return;
    }
    else if(!pwd.match(regpwd)) {
      alert("비밀번호는 영문소문자,대문자,숫자,밑줄만 사용가능 합니다")
      return;
    }
    else if(name.trim()=="") {
      alert("성함을 입력하세요")
      return;
    }
    else if(!name.match(regName)) {
      alert("성함는 영문소문자,대문자,한글만 사용가능 합니다")
      return;
    }
    else if(phone.trim()=="") {
      alert("전화번호를 입력하세요")
      return;
    }
    else if(!regTel.test(phone)) {
      alert("전화번호는 숫자 및 10~12글자까지 가능합니다!")
      return;
    }
    else if(email.trim()=="") {
      alert("이메일을 입력하세요")
      return;
    }
    else if(!email.match(regEmail)) {
      alert("이메일 형식에 맞도록 입력하세요")
      return;
    }
    else {
      alert("회원가입이 완료되었습니다!")
    }
    console.log(mid);
    console.log(pwd);
    console.log(name);
    console.log(email);
    console.log(phone);
  }