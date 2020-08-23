interface GetTemplateInfoReturnType {
  backgroundImageUrl: string
  subTitle: string
}

export const getTemplateInfo = (templateId: string): GetTemplateInfoReturnType => {
  switch (templateId) {
    case '1':
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/money.png',
        subTitle: '"내가 쏠테니까 넌 오기만 해!! 🤑"',
      }
    case '2':
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/myway.png',
        subTitle: '"너가 오던지 말던지 난 무조건 간다 😏"',
      }
    case '3':
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/please.png',
        subTitle: '"제발ㅠㅠ한 명이라도 꼭 와줘야해...😢"',
      }
    case '4':
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/threat.png',
        subTitle: '"💀안오면 죽음뿐!💀 알겠냐?"',
      }
    case '5':
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/charm.png',
        subTitle: '"난 너가 꼭 와주면 좋겠어💖 와줄꺼지?"',
      }
    case '6':
    default:
      return {
        backgroundImageUrl:
          'https://nawa-invitation.s3.ap-northeast-2.amazonaws.com/template-character-with-background/elder.png',
        subTitle: '"마! 엉아다~ 집합해라~😎?"',
      }
  }
}
