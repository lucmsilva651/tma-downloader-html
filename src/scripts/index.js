const download = document.getElementById('download');
const url = document.getElementById('url');

function hasNumber(string) {
  return /\d/.test(string);
}

function downloadModule(url) {
  if (url.includes('modarchive.org')) {
    const id = url.match(/\d+$/);
    window.open(`https://api.modarchive.org/downloads.php?moduleid=${id}`);
    return;
  } else {
    if (hasNumber(url)) {
      url = Number(url);
      window.open(`https://api.modarchive.org/downloads.php?moduleid=${url}`);
      return;
    } else {
      alert("Invalid URL or ID!");
      return;
    }
  };
}

download.addEventListener('click', () => {
  if (url.value === "") {
    alert("Please enter a URL!");
    return;
  }
  url.value.replace(/\s/g, "").split(",").forEach((element) => {
    downloadModule(element);
  });
});