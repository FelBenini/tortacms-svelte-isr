<script lang='ts'>
  export let title: string
  export let url: string
  export let img: string | null | undefined
</script>

<a href={`/${url}`}>
  <div style={`background: linear-gradient(to top, #18110b7c, transparent, transparent), url(${img || `/background.svg`}); background-size: cover; background-position: center`} class='postCard'>
    <h3>{title}</h3>
  </div>
</a>

<style lang='scss'>
  .postCard {
    width: 336px;
    height: 220px;
    background-color: #18110b7c;
    display: flex;
    align-items: flex-end;
    padding: 12px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    transition: all ease-in-out 200ms;
    &:hover {
      transform: scale(1.05);
    }
    & h3 {
      height: fit-content;
      margin: 6px;
      text-shadow: 0px 2px 6px #18110b7c;
    }
  }
  a {
    text-decoration: none;
  }
</style>