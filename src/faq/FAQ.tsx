import React from "react";
import { Box, Flex, Image, Text, Accordion, Grid } from "@mantine/core";
import "./FAQ.css";
import { IconClipboardData } from "@tabler/icons-react";

const questionsData = [
    {
        category: "Registration",
        question: "What is a dog?",
        answer: "woof",
    },
    {
        category: "Hackathon Info",
        question: "What is a cat?",
        answer: "meow",
    },
    {
        category: "Projects",
        question: "What is a bird?",
        answer: "caw",
    },
    {
        category: "Other",
        question: "What is a turtle?",
        answer: "idk",
    },
    {
        category: "Registration",
        question: "What is a horse?",
        answer: "neigh",
    },
];

function selectQuestions(category: string) {
    return questionsData.map(
        (question) =>
            category == question.category && (
                <Accordion.Item
                    key={question.question}
                    value={question.question}
                    className="faq-question"
                >
                    <Accordion.Control className="faq-control">{question.question}</Accordion.Control>
                    <Accordion.Panel>{question.answer}</Accordion.Panel>
                </Accordion.Item>
            )
    );
}

const registrationQuestions = selectQuestions("Registration");
const infoQuestions = selectQuestions("Hackathon Info");
const projectQuestions = selectQuestions("Projects");
const otherQuestions = selectQuestions("Other");

function FAQ() {
    return (
        <Flex p="lg" direction="column" gap="lg">
            <Flex p="lg" direction="column" className="faq-heading">
                <Text className="faq_header_text">FAQ</Text>
                <Text>Find the answers to your questions here!</Text>
            </Flex>

            <Grid>
                <Grid.Col span={6}>
                    <Flex
                        p="sm"
                        direction="column"
                        className="faq-registration"
                        gap="lg"
                    >
                        <Flex align="center" gap="lg" p="md">
                            <IconClipboardData size="50px" className="faq-registration-icon" />
                            <Text className="faq-category">Registration</Text>
                        </Flex>
                        <Accordion variant="separated">
                            {registrationQuestions}
                        </Accordion>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex p="sm" direction="column" className="faq-info" gap="lg">
                        <Flex align="center" gap="lg" p="md">
                            <IconClipboardData size="50px" className="faq-info-icon" />

                            <Text className="faq-category">Hackathon Info</Text>
                        </Flex>
                        <Accordion variant="separated">
                            {infoQuestions}
                        </Accordion>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex p="sm" direction="column" className="faq-projects" gap="lg">
                        <Flex align="center" gap="lg" p="md">
                            <IconClipboardData size="50px" className="faq-projects-icon" />

                            <Text className="faq-category">Projects</Text>
                        </Flex>
                        <Accordion variant="separated">
                            {projectQuestions}
                        </Accordion>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Flex p="sm" direction="column" className="faq-other" gap="lg">
                        <Flex align="center" gap="lg" p="md">
                            <IconClipboardData size="50px" className="faq-other-icon" />

                            <Text className="faq-category">Other</Text>
                        </Flex>
                        <Accordion variant="separated">
                            {otherQuestions}
                        </Accordion>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Flex>
    );
}

export default FAQ;
