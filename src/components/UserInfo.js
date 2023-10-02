class UserInfo {
  constructor(name, about, avatar) {
    this.name = name;
    this.about = about;
    this.avatar = avatar;
  }

  getUserInfo() {
    return {
      about: this.about.textContent,
      name: this.name.textContent,
      avatar: this.avatar.src,
    };
  }

  setUserInfo(name, about) {
    this.name.textContent = name;
    this.about.textContent = about;
  }

  setAvatar(avatar) {
    this.avatar.src = avatar;
    this.avatar.alt = this.name.textContent;
  }
}

export default UserInfo;
