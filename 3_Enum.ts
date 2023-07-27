enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipRevers = Membership[2]
console.log(membership)
console.log(membershipRevers)

enum SocialMedia {
    Instagram = 'inst',
    Facebook = 'facebook',
    Telegram = 'telega'
}

const social = SocialMedia.Instagram
console.log(social)