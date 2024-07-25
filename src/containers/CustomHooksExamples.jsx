import { HobbyForm } from "../components/HobbyForm";
import { SubscribeForm } from "../components/SubscribeForm"
import { CatFact } from "../components/CatFact"
import { ContextStatus } from "../components/ContextStatus";

export const CustomHooksExamples = () => {
    // state var
    // function
    // return
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <ContextStatus />
            <h4>Custom Hook Examples</h4>
            <ExampleDecorator>
                <div>
                    <h3>Subscribe Form</h3>
                    <SubscribeForm />
                </div>
                <div>
                    <h3>Hobby Form</h3>
                    <HobbyForm />
                </div>
                <div>
                    <h3>Cat Fact</h3>
                    <CatFact />
                </div>
            </ExampleDecorator>
        </div>
    );
};
const ExampleDecorator = ({ children }) => {
    return (
        <div
            className="exampleDecorator"
            style={{
                border: "solid blue 1px",
                width: "100%",
                padding: "10px",
                margin: "10px",
            }}
        >
            {children}
        </div>
    );
};