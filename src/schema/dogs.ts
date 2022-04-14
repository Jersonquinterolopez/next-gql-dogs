import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class DogAttribute {
    @Field(() => ID)
    key: string;

    @Field(() => String) 
    value: string;
}

@ObjectType()
export class Dog {
    @Field(() => ID)
    key: string;

    @Field(() => [DogAttribute]]) 
    attributes: DogAttribute[];

    @Field(() => [String])
    description: string[];

    @Field(() => String)
    image: string;

    @Field(() => Number)
    ageInWeeks: number;

    @Field(() => String)
    sex: String;

    @Field(() => String)
    breed: string 

    @Field(() => String)
    color: string 

    @Field(() => Number)
    fee: number 

    @Field(() => String)
    weight: number
    
    @Field(() => String)
    availableDate: string 
}
