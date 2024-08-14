import React from "react";
import {Box, Flex, Image, Text, Accordion, Grid} from "@mantine/core";
import left_cloud from "../assets/faq/cloud_left.svg";
import right_cloud from "../assets/faq/cloud_right.svg";
import "./FAQ.css";
import {IconClipboardData} from "@tabler/icons-react";
import icon_one from "../assets/faq/faq_icons-01.svg";
import icon_two from "../assets/faq/faq_icons-02.svg";
import icon_three from "../assets/faq/faq_icons-03.svg";
import icon_four from "../assets/faq/faq_icons-04.svg";

const questionsData = [
    {
        category: "Registration",
        question: "How do I register?",
        answer: "You can register by filling out a brief form at the “Apply Now” button at the top of the page, or by visiting apply.vandyhacks.org. You can check your application status on the registration portal.",
    },
    {
        category: "Registration",
        question: "What is the registration deadline?",
        answer: "The deadline to apply is currently September 15th at 11:59 pm. Please apply as early as possible, it helps us with plan a lot better!",
    },
    {
        category: "Registration",
        question: "Who can apply?",
        answer: "Anyone who is 18 or older by the day of the event opening and is currently enrolled in a college or university with a valid student ID."
    },
    {
        category: "Hackathon Info",
        question: "What is a hackathon?",
        answer: "A hackathon is an event where you collaborate with others to create a project from scratch. It’s less about the final product, but more about the teamwork, creativity, and problem-solving skills that are sparked in the process. There is no limit to what you can create, but there are special prizes for projects that fit specific criteria.",
    },
    {
        category: "Hackathon Info",
        question: "What if I have never been to a hackathon?",
        answer: "Dont fret! You will receive a full guide on how to hack a few days before the event, and there will also be VandyHacks staff, mentors, and other hackers to answer any questions!",
    },
    {
        category: "Hackathon Info",
        question: "How are teams formed?",
        answer: "We will provide an event after the opening ceremony specifically for team formation. You may also contact friends or form connections on Discord before the event starts. A team can have at most four people. You also don’t need a team to submit a project, feel free to work individually!",
    },
    {
        category: "Hackathon Info",
        question: "Will there be other activities??",
        answer: "Absolutely! Our committee have been working very hard on creating the best workshops, career fairs (with sponsors!), fun events, panels, and so much more! To be eligible to participate in most events, you need to register even if you don’t plan on submitting a project.",
    },
    {
        category: "Hackathon Info",
        question: "Can I participate virtually?",
        answer: "No, VandyHacks XI is purely in-person.",
    },
    {
        category: "Projects",
        question: "What can I submit?",
        answer: "You can make a project on any platform, programming language, or format to show off to our judges - you can even present a storyboard or an idea! At VandyHacks, the possibilities are limitless!",
    },
    {
        category: "Projects",
        question: "Do I have to submit a project?",
        answer: "Not necessarily! While it is highly recommended that you form a team and try to work on a project together in order to get the full hackathon experience, you can still learn a ton and have a lot of fun just by participating in our events (we worked hard on them)!",
    },
    {
        category: "Projects",
        question: "Can I submit older projects?",
        answer: "No. We require that all formal submissions be projects that were started, made, and presented exclusively during VandyHacks XI. Any submissions that were found to contain a noticeable amount of previously made material will be disqualified from all prizes.",
    },
    {
        category: "Projects",
        question: "Am I eligible to win a prize?",
        answer: "Any team of up to 4 individuals who submit a project are eligible to win a prize. Any attendee is eligible to win, but in order to receive a prize, team members must hold unrestricted work authorization in the United States.",
    },
    {
        category: "Other",
        question: "Where is the event?",
        answer: "VandyHacks XI will be held in Featheringill Hall at Vanderbilt University. Hackers commuting to Vanderbilt via car will have access to parking. There are also various transportation options nearby.",
    },
    {
        category: "Other",
        question: "What should I bring?",
        answer: "A device you can write code and/or make designs on, and a compatible charger. If you are traveling from outside of Vanderbilt, bring any supplies you would need on an overnight trip!",
    },
    {
        category: "Other",
        question: "Where can I join the Discord?",
        answer: "Once your application is approved, you will receive all the details about the event, including the invite to join the event discord.",
    },
    {
        category: "Other",
        question: "I’m interested in mentoring or judging",
        answer: "Please email chloe.p.nixon@vanderbilt.edu and subha.b.mostafiz@vanderbilt.edu, or you can DM @vandyhacks on Instagram",
    },
    {
        category: "Other",
        question: "I have more questions!",
        answer: "Feel free to message us @vandyhacks on Instagram for the fastest response. You can also email us at chloe.p.nixon@vanderbilt.edu",
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
const projectQuestions = selectQuestions("Projects");
const infoQuestions = selectQuestions("Hackathon Info");
const otherQuestions = selectQuestions("Other");

function FAQ() {
    return (
        <div>
            <Image
                src={left_cloud}
                w="80vh"
                pos="absolute"
            />
            <Image
                src={right_cloud}
                w="80vh"
                pos="absolute"
                right="0vh"
            />
            <Flex p="lg" direction="column" gap="lg" bg="#D9F8FF">
                <Flex p="lg" direction="column" className="faq-heading">
                    <Text className="faq_header_text">FAQ</Text>
                    <Text>Find the answers to your questions here!</Text>
                </Flex>

                <Grid style={{zIndex: 100}}>
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <Flex
                            p="sm"
                            pt="md"
                            direction="column"
                            className="faq-registration"
                            gap="xs"
                        >
                            <Flex align="center" gap="xs" p="xs">
                                <Image src={icon_four} pos="absolute" w="80px" className="faq-registration-icon"/>
                                <Text ml="90px" className="faq-category">Registration</Text>
                            </Flex>
                            <Accordion variant="separated">
                                {registrationQuestions}
                            </Accordion>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <Flex p="sm"
                              pt="md"
                              direction="column"
                              className="faq-projects"
                              gap="xs"
                        >
                            <Flex align="center" gap="xs" p="xs">
                                <Image src={icon_one} pos="absolute" w="80px" className="faq-projects-icon"/>

                                <Text ml="90px" className="faq-category">Projects</Text>
                            </Flex>
                            <Accordion variant="separated">
                                {projectQuestions}
                            </Accordion>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <Flex p="sm" direction="column" className="faq-info" gap="xs">
                            <Flex align="center" gap="xs" p="xs">
                                <Image src={icon_two} pos="absolute" w="80px" className="faq-info-icon"/>

                                <Text ml="90px" className="faq-category">Hackathon Info</Text>
                            </Flex>
                            <Accordion variant="separated">
                                {infoQuestions}
                            </Accordion>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <Flex p="sm" direction="column" className="faq-other" gap="xs">
                            <Flex align="center" gap="xs" p="xs">
                                <Image src={icon_three} pos="absolute" w="80px" className="faq-other-icon"/>

                                <Text ml="90px" className="faq-category">Other</Text>
                            </Flex>
                            <Accordion variant="separated">
                                {otherQuestions}
                            </Accordion>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Flex>
        </div>
    );
}

export default FAQ;
