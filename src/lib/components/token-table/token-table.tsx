"use client"

import { Token as TokenType } from "~/lib/docs/constants/tokens"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/lib/shadcn/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/lib/shadcn/components/ui/tooltip"
import { Token, TokenPreview, TokenText } from "../tokens/token"
import { useState } from "react"

type TokenTableRowProps = {
  token: TokenType
}

function TokenTableRow ({token}: TokenTableRowProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  function handleClick () {
    navigator.clipboard.writeText(token.value);
    setIsCopied(true);
  }

  return (
    <TableRow>
      <TableCell>
        <Tooltip
          open={isTooltipOpen}
        >
          <TooltipTrigger
            onClick={
              () => handleClick()
            }
            onMouseOver={() => setIsTooltipOpen(true)}
            onMouseLeave={() => {
              setIsTooltipOpen(false);
              setIsCopied(false);
            }}
          >
            <Token>
              <TokenPreview
                style={{backgroundColor: token.value}}
              />
              <TokenText>{token.value}</TokenText>
            </Token>
          </TooltipTrigger>
          <TooltipContent>
            {
              isCopied ? "Copied!" : "Click to copy"
            }
          </TooltipContent>
        </Tooltip>
      </TableCell>
      <TableCell>
        <Token>
          <TokenText>{token.color}</TokenText>
        </Token>
      </TableCell>
      <TableCell>
        <Token>
          <TokenText>{token.name}</TokenText>
        </Token>
      </TableCell>
    </TableRow>
  )
}

type TokenTableProps = {
  tokens: TokenType[]
}

function TokenTable ({ tokens }: TokenTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Color</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Token</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          tokens.map((token, index) => (
            <TokenTableRow
              key={index}
              token={token}
            />
          ))
        }
      </TableBody>
    </Table>
  )
}

export type {
  TokenTableProps
}

export {
  TokenTable
}
