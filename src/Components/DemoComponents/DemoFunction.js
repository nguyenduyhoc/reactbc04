// react function component : rfc
import React from 'react'

export default function DemoFunction() {

    // đối với function component bên dưới lệnh return sẽ là giao diện của thẻ <demoFunction />
    // lưu ý: Nội dung của thẻ phải được bao thủ bởi 1 thẻ, ko được viết song song
    return (
        <div>
            <p className="p-2 bg-dark text-light">Hello</p>
            <p>Hello</p>
        </div>
    )
}
