class SlideView {
  mostraSlide(contador) {
    if (contador == 0) {
      $(`.conteudo${4}`).css('display', 'none');
      $(`.conteudo${contador}`).css('display', 'flex');
    } else {
      $(`.conteudo${contador - 1}`).css('display', 'none');
      $(`.conteudo${contador}`).css('display', 'flex');
    }
  }
}

class SlideViewPrev {
  mostraSlide(contador) {
    if (contador == 4) {
      $(`.conteudo${0}`).css('display', 'none');
      $(`.conteudo${contador}`).css('display', 'flex');
    } else {
      $(`.conteudo${contador + 1}`).css('display', 'none');
      $(`.conteudo${contador}`).css('display', 'flex');
    }
  }
}
