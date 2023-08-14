- 

## **Part 2: React Router Color Factory**

The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors.

### **User Stories**

1. As a user, I can go to */colors* to see a list of all available colors.
2. As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.
    
    (The route here should be */colors/:color* )
    
3. As a user, I can click on a button to show a form that will let me add a new color.
    
    Note that you can give an *input* a type of *color* if you’re trying to select a color. (The route here should be */colors/new*)
    
4. As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
5. As a user, if I try to navigate to a color page that does not exist (eg, */colors/nope*), I am redirected to the colors index page.
6. As a user, if I try to navigate to an invalid url (eg, */this-is-not-valid*), I am redirected to the colors index page.
Here’s an idea of what your app could look like:

https://file.notion.so/f/s/9faa91ac-0a44-4c3c-af34-62dc4c8472f4/color.mp4?id=20a1ad6c-5409-4796-aa3f-ef9395b818e9&table=block&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&expirationTimestamp=1692108000000&signature=zxHEzg2VDk9YBHpkVNP57PXRSbsePbYc37LXWQu_lco&downloadName=color.mp4
## ****Further Study****

1. Write tests for these applications!
2. Persist your colors data in *localStorage*. (You should use useEffect for this).
3. Add nice styling to your apps.

