export type BlockquoteType = 'default' | 'solid'

export interface BlockQuoteProps {
    type?: BlockquoteType
    cite?: string
    class?: string
}
