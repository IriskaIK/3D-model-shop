import type Image from '@/types/image.types'

export interface Tag {
    id: number;
    title: string;

}

export interface Category{
    id: number;
    title : string;
    content : string;
    image_id : number;
    images : Image;
}

export default interface Product{
    id : number;
    slug : string;
    title : string;
    subtitle : string;
    content : string;
    price : number;
    currency : string;
    isInStock : boolean;
    category_id : number;
    created_at : string;
    updated_at : string;
    category : Category;
    tags : Tag[];
    images : Image[];
}