import {useState} from "react";
import {Button, Text} from "@chakra-ui/react";
interface Props {
    children: string
}

const ExpandableText = ({children}: Props) => {
    const [expanded, setExpanded] = useState(false)
    const LIMIT = 300;

    if(children.length <= LIMIT) return <Text>{children}</Text>;
    if (!children) return null;
    const summary =expanded ? children :  children.substring(0, LIMIT) + '...';

    return (
        <Text>{summary}<Button
            marginX={5}
            size={'xs'}
            fontWeight={'bold'}
            colorScheme={'yellow'}
            onClick={() => {setExpanded(!expanded)}}>
            {expanded ? 'Show less' : 'Read more'}
        </Button></Text>
    );
};

export default ExpandableText