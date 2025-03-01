const translate = document.querySelector(".translate");
translate.addEventListener("click",()=>{
    document.querySelector(".inst p").innerText = `ব্যবহার পদ্ধতি : এলোমেলো সংখ্যা পেতে হলে নিচে দেওয়া "new One" বোতামটি চাপুন !
    সংখ্যার দৈর্ঘ্য নির্ধারণ করে দেওয়ার জন্য নিচের অপশনগুলো থেকে দৈর্ঘ্য চিহ্নিত করুন ! যোগ বিয়োগ গুন ভাগ নির্ধারণ করতে হলে অপশনগুলো থেকে যে কোন একটা নির্ধারণ করতে হবে !`;
});


let num1, num2;
outNum1 = document.querySelector('#num1');
outNum2 = document.querySelector('#num2');
function ranNum(){
    document.querySelector(".ra").style.display = "none";
    let sel1, sel2, optSim;
        sel1 = document.getElementById("optForNum1").value;
        sel2 = document.getElementById("optForNum2").value;
        optSim = document.getElementById("optSim").value;

    let num1 = Math.ceil(Math.random() * sel1);
    let num2 = Math.ceil(Math.random() * sel2);

    outNum1.innerHTML = num1;
    outNum2.innerHTML = num2;

    var cal = `${num1}${optSim}${num2}`;
    
    document.getElementById("optSim").addEventListener("change",()=>{
        optSim = document.getElementById("optSim").value;
        cal = `${num1}${optSim}${num2}`;
    });

    document.getElementById("Calculator").addEventListener("click",()=>{
        let sum = eval(cal);
        document.querySelector(".ra").style.display = "inline-block";
        document.querySelector(".ra span").innerText = sum;

    })
}
document.getElementById("newNum").addEventListener('click',ranNum);
