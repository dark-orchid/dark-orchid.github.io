import {FC}                                                                          from 'react';
import {Badge, Box, Code, Divider, Flex, Group, Paper, TableOfContents, Text, Title} from '@mantine/core';


interface IProps {
}

const DocumentationItem: FC<IProps> = () => {
    return (
        <Box>
            <Box
                style={{
                    zIndex: 10, backdropFilter: 'blur(6px)',
                    borderBottom: "1px solid var(--mantine-color-zinc-2)"
                }}
                bg="rgba(0,0,0,0.2)"
                px={40}
                py={50}
                w="100%"
                top={0}
                left={300}
                pos="fixed"
            >
                <Title c="var(--mantine-color-zinc-10)" order={1}>Component: SuperWidget</Title>
                <Text mt={10} size={"sm"} c="var(--mantine-color-zinc-7)">Version: <Code>v2.3.7-beta</Code></Text>
                <Text mt={5} size={"sm"} c="var(--mantine-color-zinc-7)">Last updated: 2025-07-10</Text>
            </Box>
            <Box
                mt={250}
                mx={30}
                style={{
                    width: '110dvh',
                    overflowX: 'hidden',
                    overflowY: 'scroll'
                }}
            >
                <Flex justify="space-between" w="100%">
                    <Box w={"60%"} id="mdx">
                        <section>
                            <Title order={2}>🧾 Einleitung</Title>
                            <Text mb="md">
                                Willkommen zur Dokumentation des <strong>SuperWidget</strong>. Dieses React-Component
                                ist hochgradig
                                performant, modular und vollständig typisiert.
                            </Text>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>💡 Features</Title>
                            <ul>
                                <li>Dark-Mode kompatibel</li>
                                <li>Hot-Reload unterstützend</li>
                                <li>TSX ready & voll typisiert</li>
                                <li>Extrem anpassbar durch Props & Slots</li>
                            </ul>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>🧪 Beispiel</Title>
                            <Text>Ein einfaches Beispiel:</Text>
                            <Code block>
                                {`<SuperWidget title="Hello World" theme="dark" onClick={() => alert("clicked!")} />`}
                            </Code>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>🔧 Installation</Title>
                            <Code block>npm install super-widget</Code>
                            <Text mt="sm">Oder mit Yarn:</Text>
                            <Code block>yarn add super-widget</Code>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>
                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>
                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>
                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>
                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>
                        <section>
                            <Title order={2}>📦 Git Info</Title>
                            <Text>Repository: <Code>github.com/acme/super-widget</Code></Text>
                            <Text>Branch: <Badge color="indigo">main</Badge></Text>
                            <Text>Commit: <Code>f3e1c9d</Code></Text>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>🕰️ Changelog</Title>
                            <Paper shadow="xs" p="md" withBorder>
                                <Text>
                                    <strong>[v2.3.7-beta]</strong> - 2025-07-10
                                </Text>
                                <ul>
                                    <li>Added dark mode support</li>
                                    <li>Refactored props interface</li>
                                    <li>Fixed bug in resize handler</li>
                                </ul>
                            </Paper>
                        </section>

                        <Divider my="lg"/>

                        <section>
                            <Title order={2}>👤 Autoren</Title>
                            <Group>
                                <Badge variant="light" color="cyan">Max Mustermann</Badge>
                                <Badge variant="light" color="teal">Jane Dev</Badge>
                            </Group>
                            <Text mt="xs">Maintained by <Code>@acme</Code> team.</Text>
                        </section>
                    </Box>

                    <Box w="100%" maw={300} right={15} pos="fixed" p="md">
                        <TableOfContents
                            variant="light"
                            color="grape.5"
                            size="md"
                            minDepthToOffset={0}
                            depthOffset={40}
                            radius="md"
                            scrollSpyOptions={{
                                getDepth: (element) => Number(element.getAttribute('data-order')),
                                selector: '#mdx :is(h1, h2, h3, h4, h5, h6)'
                            }}

                            getControlProps={({data}) => ({
                                onClick: () =>
                                    data.getNode().scrollIntoView({
                                                                      behavior: 'smooth',
                                                                      block: 'center',
                                                                      inline: 'center'
                                                                  }),
                                children: data.value
                            })}
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default DocumentationItem;
