class User {
  constructor(profileName, profileImage) {
    this.profileImage = profileImage;
    this.profileName = profileName;
  }

  createPost(post) {
    return {
      key: Math.random().toString(),
      image: this.profileImage,
      name: this.profileName,
      content: post,
    };
  }
}

export default User;
