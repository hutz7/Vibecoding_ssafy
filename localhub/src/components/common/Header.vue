<template>
  <header class="header">
    <div class="logo">
      <RouterLink to="/">🏙️ LocalHub</RouterLink>
    </div>

    <nav class="menu">
      <RouterLink to="/">홈</RouterLink>
      <RouterLink to="/places">관광정보</RouterLink>
      <RouterLink to="/board">게시판</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 70px;
  background: #1976d2;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
}

.logo a {
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 25px;
}

.menu a {
  color: white;
  text-decoration: none;
}

.menu a.router-link-active {
  font-weight: bold;
}
</style>