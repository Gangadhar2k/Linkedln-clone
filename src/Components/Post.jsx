import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({name,discription,message}) => {

    console.log(name,discription)
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar variant="square" className='post__avatar'/>
            <div className="post__info">
                <h3>{name}</h3>
                <p>{discription}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} colour="gray" title="Like"/>
            <InputOption Icon={ChatOutlinedIcon} colour="gray" title="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} colour="gray" title="Share"/>
            <InputOption Icon={SendOutlinedIcon} colour="gray" title="Send"/>
        </div>
    </div>
  )
}

export default Post