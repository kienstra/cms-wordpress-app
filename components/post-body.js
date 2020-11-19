import HeadlessBlocks from 'headless-blocks';
import * as blockComponents from 'headless-block-components';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <HeadlessBlocks
        postContent={content}
        blockComponents={blockComponents}
      />
    </div>
  )
}
