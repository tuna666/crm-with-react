import React from 'react';
import PostForm from "@/Components/Customer/Form";

export default function Edit(props) {

    const { customer, errors } = props;

    return (
        <PostForm type="edit" customer={customer} errors={errors}></PostForm>
    );

}
