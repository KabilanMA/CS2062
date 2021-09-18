const notify= document.querySelectorAll(".notify-me");
const overlay=document.querySelector(".overlay");
const okButton = document.querySelector(".ok");
const hospital = document.querySelector('.hos-name').firstElementChild.textContent.trim();
const emailNode = document.querySelector('.email');
console.log(emailNode);
let facility = null;

for (let i = 0; i < notify.length; i++) {
    const element = notify[i];
    element.addEventListener('click', function(){
        document.querySelector(".hidden").style.display="block";
        facility = element.parentElement.firstElementChild.textContent.trim();
        console.log(facility);
    });
}

okButton.addEventListener("click", function(){
    console.log(emailNode.value.trim());
    $.ajax({
        type: "POST",
        url: "../PHP/dataSaver.php",
        data: {email: emailNode.value.trim(), fac: facility, hos: hospital},
        success: function (response) {
            document.querySelector(".hidden").style.display="none";
            alert("Successfully added");
        },
        error: function(xhr, ajaxOptions, thrownError){
            alert("Refresh and try again");
        }
    });
});

    
overlay.addEventListener("click",function(){
    document.querySelector(".hidden").style.display="none";
});