import React from 'react'

const Messages = ({ messages }) => {
  return (
    <div>
        {
            messages.map((message, index) => {
                return (
                    <table key={index}>
                        <tr key={index}>
                            <td>{message.msg} : {message.userName}</td>
                        </tr>
                    </table>
                )
            })
        }
    </div>
  )
}

export default Messages