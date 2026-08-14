export interface ReviewCardProps {
    r: review
}
export interface review {
    id: string;
    name: string;
    profession: string;
    review: {
        title: string;
        description: string
    };
    img: string
}

export interface blog {
    id: string;
    slug: string;
    date: string;
    time: string;
    title: string;
    subtitle: string;
    img: string;
    cat: string
}

export interface faq {

    id: string;
    title: string;
    description: string;

}