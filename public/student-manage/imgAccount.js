class ImgAccount {
    id;
    img;

    constructor(id, img) {
        this.id = id;
        this.img = img;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }
}