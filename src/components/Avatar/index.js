import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://i.imgur.com/CdWdgg2.jpg"
        alt="Me after some sips of wine"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
