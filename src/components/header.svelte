<header>
  <h3><a href='/'><img alt='Svelte + tortaCMS' src='/svelteplustorta.svg'/></a></h3>
</header>

<style lang='scss'>
  header {
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 0px;
    height: 56px;
    position: fixed;
    display: flex;
    background-color: white;
    z-index: 99;
    align-items: center;
    padding: 6px 12px;
    & img {
      height: 56px;
      filter: grayscale(1);
      transition: all ease 400ms;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
</style>