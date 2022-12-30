import React from 'react'

export default function Uploadfile() {
    return (
        <div>
            <form action="/multiple-upload" method="POST" enctype="multipart/form-data">

                <input type="file" multiple />

            </form>
        </div>
    )
}
