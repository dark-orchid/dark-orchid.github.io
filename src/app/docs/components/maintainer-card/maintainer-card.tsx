import { Card, Flex, Text } from "@mantine/core";
import { ReactNode } from "react";
import { Badge } from "@mantine/core";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type MaintainerCardTitleProps = {
  children: ReactNode
}

export function MaintainerCardName (props: MaintainerCardTitleProps): ReactNode {
  return (
    <Text size="md">{props.children}</Text>
  );
}

type MaintainerCardImageProps = {
  src: string;
}

export function MaintainerCardImage (props: MaintainerCardImageProps): ReactNode {
  return (
    <img src={ props.src } width="48" height="48" style={{
      borderRadius: "var(--mantine-radius-lg)"
    }} />
  )
}

type MaintainerCardLeftProps = {
  children: ReactNode
}

export function MaintainerCardDetails (props: MaintainerCardLeftProps): ReactNode {
  return (
    <div>
      {props.children}
    </div>
  )
}

type MaintainerCardRoleProps = {
  children: ReactNode
}

export function MaintainerCardRole (props: MaintainerCardRoleProps): ReactNode {
  return (
    <Badge variant="dot">{ props.children }</Badge>
  )
}

type MaintainerCardProps = {
  children: ReactNode;
  href: string;
}

export function MaintainerCard (props: MaintainerCardProps): ReactNode {
  return (
    <Link href={props.href} passHref style={{
      textDecoration: "none"
    }} target="_blank">
      <Card>
        <Flex gap="md">
          {props.children}
          <ExternalLink style={{
            marginLeft: "24px"
          }} size={16} />
        </Flex>
      </Card>
    </Link>
  );
}

