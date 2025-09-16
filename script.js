
const produto = document.getElementById("produto");
const imgProduto = document.getElementById("img-produto");
const infoExtra = document.getElementById("info-extra");

// troca de imagem ao passar o mouse:
// mouseover trocar quando o mouse passar por cima do elemento
imgProduto.addEventListener("mouseover", () =>{
    imgProduto.src ="https://s2-techtudo.glbimg.com/C2WbUCaORMOlCli66NEp6nR7Fug=/0x0:3999x2666/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/X/B/kLG33xQ4GrbM3r3C9ubw/galaxy-s25-ultra.jpg"
});

imgProduto.addEventListener("mouseout", ()=>{
    imgProduto.src ="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s24-ultra-68-galaxy-ai-256gb-titanio-preto-5g-12gb-ram-cam-quadrupla-200mp-selfie-12mp-bateria-5000mah-dual-chip/magazineluiza/238093700/0033a48af0e3f87a570ddbd42e456214.jpg"
});


produto.addEventListener("mouseover", ()=>{
    infoExtra.classList.add("mostrar");
    produto.classList.add("mudanca");
});


produto.addEventListener("mouseout", ()=>{
    infoExtra.classList.remove("mostrar");
    produto.classList.remove("mudanca");
})
