<template>
    <div>
      <h1>Go back to where you WERE</h1>
      <img src="../assets/pictures/verboden-toegang.jpg" />
    </div>
</template>

<script>
export default {
  name: "ForbiddenPage",
};
</script>

<style lang="scss" scoped>
@use "styles/main" as *;
img {
  display: block;
  margin: auto;
}
.button1 {
  position: relative;
    top: 630px;
    left: 510px;
    display: block;
    background-color: transparent;
    width: 50px;
    height: 80px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}
.button2 {
  position: relative;
    top: 440px;
    left: 510px;
    display: block;
    background-color: transparent;
    width: 50px;
    height: 80px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}
.button3 {
  position: relative;
    top: 250px;
    left: 510px;
    display: block;
    background-color: transparent;
    width: 50px;
    height: 80px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}
.button4 {
  position: relative;
    top: 30px;
    left: 510px;
    display: block;
    background-color: transparent;
    width: 50px;
    height: 80px;
    border: 4px solid #630e9e;

    &:hover {
      border-color: #0070ae;
    }
}

</style>
