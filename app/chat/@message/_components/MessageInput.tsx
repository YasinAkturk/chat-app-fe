import { Input } from '@/components/ui/input';
import EmojiPicker from '@emoji-mart/react';
import data from "@emoji-mart/data";
import { FaceIcon, LinkNone2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import React from 'react'

interface Props {
    message: string
    setMessage: (value: string) => void
    openEmoji: boolean
    toggleEmojiPicker: () => void
    addEmoji: any
}

const MessageInput = ({
    message,
    setMessage,
    openEmoji,
    toggleEmojiPicker,
    addEmoji,
  }: Props) => (
    <div className="flex-none flex items-center gap-2 h-16 p-2">
      <LinkNone2Icon className="size-7 cursor-pointer" />
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesaj"
        className="mr-2 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
      />
      <PaperPlaneIcon className="size-5 -rotate-45 cursor-pointer" />
      <FaceIcon
        className="size-6 mx-2 pt-1 cursor-pointer"
        onClick={toggleEmojiPicker}
      />
      {openEmoji && (
        <span className="absolute bottom-20 right-6">
          <EmojiPicker
            previewPosition={"none"}
            maxFrequentRows={1}
            data={data}
            emojiSize={20}
            emojiButtonSize={30}
            onEmojiSelect={addEmoji}
          />
        </span>
      )}
    </div>
  );

  export default MessageInput