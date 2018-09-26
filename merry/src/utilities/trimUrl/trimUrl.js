const trimUrl = url => url.replace(/(#|\?).+/g, '');

export default trimUrl;
