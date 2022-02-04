import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://i.imgur.com/CdWdgg2.jpg"
        alt="Uma foto minha já um pouco ébrio de vinho"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
