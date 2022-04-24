
var button = document.getElementById("btn");

function getProfile()
{
    let usname = document.getElementById("username").value;
    fetch(`https://api.github.com/users/${usname}`).then(res => res.json()).then(data =>{
        getLogin(data);

    function getLogin(data)
        {
            console.log(data.login);
            let login = data.login;
            document.getElementById("login").innerHTML = login;
        }
  getAvathar(data);
    function getAvathar({avatar_url})
        {
             var img = "";
             fetch(avatar_url).then(res => {
             console.log(res.url);
             document.getElementById("avatar").src = res.url;});
        
        }
        getLocation(data);
        function getLocation(data)
        {
            let location=data.location;
            console.log(data.location);
            document.getElementById("location").innerHTML = "Your Logged in from "+location;
         }
    getRepoURL(data);
    function getRepoURL({repos_url})
        {
            var count =0;
            fetch(repos_url).then(res => res.json()).then(data => {
                console.log(data.length); 
                count = "Your total Public Repo is "+data.length;
            
            document.getElementById("repo_count").innerHTML =count;
            getRepoCloneURL(data[0]);
               });
               function getRepoCloneURL({clone_url})
               {
                   console.log(clone_url);
                   document.getElementById("repo_url").innerHTML = "Your Repo Clone URL is "+clone_url;
               }
        }

});
}





