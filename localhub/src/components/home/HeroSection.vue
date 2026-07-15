<template>
  <section class="hero">
    <h1>서울 지역 관광 정보를 한눈에</h1>

    <p>
      관광지, 문화시설, 축제, 숙박 정보를
      쉽고 빠르게 확인해보세요.
    </p>

    <div class="buttons">
      <RouterLink to="/places" class="btn primary">
        관광정보 보기
      </RouterLink>

      <RouterLink to="/board" class="btn">
        게시판 가기
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero{
    text-align:center;
    padding:80px 20px;
}

.hero h1{
    font-size:42px;
}

.hero p{
    color:#666;
    margin:20px 0 40px;
}

.buttons{
    display:flex;
    justify-content:center;
    gap:20px;
}

.btn{
    padding:14px 28px;
    border-radius:10px;
    text-decoration:none;
    border:1px solid #1976d2;
    color:#1976d2;
}

.primary{
    background:#1976d2;
    color:white;
}
</style>