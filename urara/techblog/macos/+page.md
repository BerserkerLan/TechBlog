---
title: Why MacOS is still behind - 10 ways it could improve
summary: We go over the things MacOS still doesn't implement properly, and go over what these are and how they can be improved
created: 2023-12-08
image: '././mac_os.jpg'
tags: ['Apple', 'MacOS']
---

Another Apple hate article? In all fairness, Macs have really improved since they released their M series chips, being an ARM based architecture, they are extremely power efficient and highly suitable for Laptops. With excellent benchmark metrics, Macs are one of the best laptops one can afford at the moment.

While recently they announced their new M3 Macbook Pro that defaults to 8GB RAM without spending another $200 atleast for more RAM, before now in comparison they were decently affordable for what they are, starting at $999 for the M1 Macbook Air (although this too with 8GB RAM). While it took time for some applications to take advantage of the Apple chip architecture such as Docker, it is now fully supported and is extremely efficient to run.

Other than the additional price for RAM upgrades, however, there still remains a significant drawback of Macs that is the Operating System, MacOS.

I can already see the pitchforks and torches.

I have used MacOS for more than 5 years now, being the primary OS used for work. It is good for coding due to it's ease of use with the Terminal being a very similar, albeit different, experience to Linux. However, other applications and features of the operating system seem lackluster in comparison to Linux or even Windows. I will list 10 reasons why it's not to the standard that most people claim when saying is the best, most user-friendly operating system.

## 10. Side by Side Window snapping

Where to start with this one. This has been a feature since Windows 7 time in Windows lineup, [which dates back to July 22, 2009](https://www.minitool.com/news/windows-7-release-date.html).

Try right now if you're on MacOS to drag a window to the side, and check if it automatically snaps to the side, or atleast shows you the region it will occupy. You can't, not without applications like [Rectangle](https://rectangleapp.com/). Huh, but of course you can natively have windows side by side, you just hold the green button on the top title bar and select to have the window side by side like so:

That is true, however this is limited and somehow opens the whole application in a new "full screen" mode, and is still not as intuitive and easy as snapping. This is a pretty basic feature found in almost every other OS, but somehow MacOS still doesn't have it, resulting in others having to create their own third party apps to support this. When I first used MacOS, I actually had to Google HOW to do this, it isn't intuitive at all.

You might say, you're coming from Windows, if you used MacOS from the start, you'd find windows implementation wierd. Right, I used Linux quite a bit as a child due to having an extremely underpowered computer that couldn't even run WindowsXP properly, even Ubuntu (The Linux distro I used at that time) had window snapping. It is a very basic multi-tasking feature, specially when you only have one display. I don't think it is a pretty complicated feature to implement, just that Apple outright doesn't wish to implement it.

### Why don't they just implement it then?

I believe this is because of how MacOS works. MacOS has some form of side by side window viewing, as mentioned before, by holding the green button in the top bar. This makes the whole application go "full screen" and then you are meant to select another application to go side by side, creating this in a whole new workspace seperate from the main workspace. This implementation is what Apple wants to keep, as it helps organize these snapped windows into it's own workspace. I can see the advantage, but I don't think this should restrict implementing basic snapping, as that is just easier to do. They could possibly keep their full screen implementation of side by side and also implement window snapping as a different view, that keeps the current workspace for snapping it to the side,

## 9. Compressed archives are a nightmare

ZIP files, basic thing at this point right? MacOS can extract them just fine, and compress them back. Incredible, so futuristic much wow. However, I regularly have the task of editing these zip archives, adding new files to them, changing the contents in the files already in the ZIP. To my surprise, MacOS does not have this capability at all.

What, editing a ZIP file? That's impossible, I regularly compress and extract folders all the time. Yes, that's all it can do though. If you look beyond MacOS, you'll learn that opening a zip file without extracting it is actually a very common operation, dragging and dropping a file to an existing archive. If you're on MacOS, just try it, have an existing ZIP files and try to drag any file or folder into it. I not only don't know what is in the zip files without extracting it (MacOS does this automatically when you double click on it), but I can't even simply drag and drop a file into it. To edit this archive, I have to extract that archive, resulting in it's own folder, then I copy and paste the file I want to add into that folder, and then compress it again into a new zip. Lot of steps for something so basic. There are also ways to do this with the [Terminal](https://wphosting.tv/how-to-add-files-to-an-existing-zip-archive-on-macos-and-linux/) but then one wonders if you have to touch the Terminal for something so common, how does this make the OS user friendly for the common user? Why is it so challenging to add this extremely basic feature to MacOS? I have tried to think of why this isn't there, is there some monetary value that Apple sees in not having this feature, but I cannot fathom any reason for even a company such as Apple to NOT have this feature.

## 8. The dock doesn't support minimize on click

Huh, you mean the one with the fancy icons and animations? No way, how is that bad?? If you've used MacOS your whole life and nothing else, you probably don't understand this point, maybe you're used to not minimizing applications much.

On Windows and Linux, when you click an application on the taskbar or dock, it opens it in any state it was before, or opens it anew if it was closed. If that application is already open AND visible on the screen, and you click the application icon on the dock or taskbar, it minimizes the application. MacOS doesn't do this, it just keeps it as is, no minimization. To minimize, you have to press the 'minimize' button on the top right in the Title bar.

Oh ok then, that's just an implementation difference. Except it isn't you can also minimize on the title bar in both Windows and Linux. Surprise surprise, it is just another feature MacOS doesn't have. This particular aspect might be a major gripe for people coming from other OSes to MacOS, but for an OS that most claim is the most user friendly, it does not have a feature one would consider would make life easier for a user.

## 7. The dock doesn't show multiple windows

Nope, I'm not done with the dock yet. In my work regularly, I open multiple browser windows due to checking how a website or some functoinality works without any cached data for that website. For this simple task, I just use an incognito window. Easy enough. In Windows and Linux, it either makes a new icon for this new window, or when I hover my mouse over it, it shows both the windows and I can just choose which one to open up on the screen.

Ladies and gentlemen, what does MacOS do? It just opens up one of the application windows, it doesn't open the other one if you press it another time, it never shows the options to you when you press it once, it just opens something and you're often left wondering, ok but where did my other window go? If you right click on the application icon in the dock, you will then see a vertical list that shows the other windows, with the title of the tab open in that application. This is quite painful when you have multiple localhost sessions and have no idea which one looks like what. Windows and Linux, you can just hover and it shows visually how the window actually LOOKS, so you can easily know which application window it was and open it. This is such a wierd thing for Macs to not have, it feels like I'm using very old software in some outdated time that cannot display the application visually while hovering. This is utterly dissapointing from a company that claims to have premium software, often asking for the premium price for this. This just adds into the pain points of multi tasking on MacOS.

## 6. Workspace switching is slow

The MacBooks trackpads are great, there is no doubt. They are big, easy to click and use and it has great touchpad gestures (though not exclusive to MacOS, all these gestures are in GNOME in Linux by default and in many other Linux distros). However, still it is a positive for MacOS. Rather, this particular point wasn't a big issue in older Macbooks, it is an issue that came about from Apple's 'new' ProMotion Display (fancy name for just a 120Hz display, typical Apple to be fair). How is this a negative then? I just stated two positives! Somehow, two positives make a negative when it comes to Apple, as on ProMotion displays, I observed that there is a bigger delay when workspace switching, and [I'm not the only one](https://www.reddit.com/r/MacOS/comments/rfmg4e/workspace_switching_takes_almost_twice_as_long/).

The reddit post explains it with a video, but somehow due to Apple's implementation, it takes TWICE the amount of time to switch a workspace with a ProMotion display than a normal 60Hz one. I honestly am appalled how any laptop manufacturer that controls both their OS and the hardware can accomplish something like this, but hey it's Apple, innovator of issues as "features". I cannot fathom how they made something that was actually quite fun to do terrible and annoying on the new models, to the point that I have to change my workflow to using one workspace. I used to get around the pain point of multiple windows not showing in the dock on point 7, by having that window open in another workspace and simply swiping to it on the mousepad, however now with the delay become ever so frustrating, I have to force myself to go the round about way of right clicking the icon and switching to the other window. It is just another way Apple just doesn't care about the true experience and usage and simply does this for a longer "smoother" animation.

## 5. The App store is mostly pointless

The App store is something that's now also in Windows (since Windows 8) and of course, has been in Linux for some time now. However, as all things Apple, it's overpriced. The app store takes a whopping [30% cut of any apps revenue on their app store](https://appleinsider.com/articles/23/01/08/the-cost-of-doing-business-apples-app-store-fees-explained#:~:text=On%20the%20iOS%2C%20iPadOS%2C%20watchOS,apps%20and%20in%2Dapp%20purchases.). They are kind enough to drop this to 15% in the subsequent years after the first (surprisingly). Even more kind of them, if your app is free, they won't take a cut of your revenue (so innovative). But aha, this is Apple we're talking about, there is yet one more fee I haven't gone over, the annual $99 fee for any app on the app store, any developer account. It depends on the reader if this amount seems high or low, but alas you must be confident your app can earn atleast this much annually, otherwise you're just losing money. Sure, earning money isn't everything for every developer, they'd happily put their app up if this $99 annual fee seems less to them to make it easier for their users to install, however one can just not put it on the app store and allow the user to download from their website instead, further making me confused what the app store provides.

But hey, you're purchasing an application from the store, surely they are bound to Apple policies which totally allow refunds or trials versions before you commit? Alas, [the app store has no trials](https://www.howtogeek.com/396239/how-to-get-a-refund-from-the-apple-app-store/). There are refunds that you can request from a form, but do not think this is a lax form and you can just refund an app after trying it out for some time and not prefering it. You are left just praying that Apple accepts your refund reason and gives you your money back. You'll have to scout for reviews and videos of the application to check if it suits your purpose, when you could just directly download the application from some website, and try it out, which leaves the option of having a free trial completely up to the developer instead of some third party app store.

## 4. What is Gaming?

Now in all fairness, Apple is trying to bring more games to their platform, with their game porting toolkit that was [recently announced](https://developer.apple.com/games/). However, Apple still has [restrictions](https://9to5mac.com/2015/02/12/apple-violent-apps/) in place which makes porting games to Mac all the less appealing. The number of games ported to Macbooks is still very limited, and many folks on this [reddit post](https://www.reddit.com/r/macgaming/comments/122wsnn/what_is_the_state_of_mac_gaming_in_2023_in_your/) have expressed their frustration with this despite the announcment. One user specifically mentions the price "$1200+ laptops/ computers and we can’t get a variety of good AAA games".

Apple did manage to entice developers to adopt their M chip architecture for their applications, forcing them to adapt and write software specific for the silicon architecture, but it might be more difficult for them to entice developers to port their games. Gaming is a market dominated by Microsoft and Sony, with Microsoft alwyas acquiring big names such as Bethesda. I don't see a future where these game studios see the benefit of having their game on the MacOS ecosystem. I say this, but there have been games that have made Mac Specific builds such as League of Legends, however it is still limited and difficult to be confident that Mac's will have proper gaming capabilities any time soon.

## 3. Lack of customization

You can't even change the default icon size. Enough said.

You can't change icon themes, file manager, windows manager, none of that. Not even the look of the mouse pointer. This might seem tedious or useless to some, the ones who really like the look and appeal of MacOS, however the fact that you can't customize it to your liking, let's say you like the top bar at the bottom, or a more windows ish look with everything at the bottom for more screen space, you can't do that on MacOS.

Just take a look at the r/unixporn subreddit. Linux provides unlimited customization capability, you can make it more Mac like, more Windows Like, or just a full blown tiling manager, whatever you want. This is something MacOS could allow and would truly make a lot of the points above go away e.g. if you could change the dock into another custom dock.

## 2. Finder is a terrible file manager

Oh boy this is a contested topic for some reason, even though it's clear as day how limiting and frustrating finder truly is. The main point people give is it's simple and user friendly, I prefer the terms extremely plain, boring, and lacking of modern features.

Files don't auto arrange in Finder, like shown in this video: https://youtu.be/qlvG_lmApLY. Why doesn't it just arrange them automatically into a grid, or even a list, instead of this? I'll never understand. This rather goes against being user friendly too as now the user is left to figure out manually how to arrange the files as he would like.

There ain't any cut and paste. Very wierd. There is Apple's own roundabout way of copying, and then you hold down the option key, which shows the option to paste and disregard the original file. Wierd.

There is no tabbing in Finder. Why? I don't know. A pretty simply feature in this day and age.

## 1. Limited to running on Mac Hardware

If for some insane reason after reading this article, you are motivated to try out MacOS, you can only use it on a Macbook, an expensive Apple device. There are no budget options, nothing, it will cost you atleast $900 for the most basic low tier version that has only 8GB ram that is extremely little in this day and age, even if Apple wants to claim baselessly, as they do, that it is the same as a PC 16GB RAM. This claim was put to the test by many youtubers and [articles](https://bnnbreaking.com/tech/apples-macbook-pro-8gb-ram-claim-put-to-the-test-does-it-hold-up/#:~:text=Apple%20recently%20claimed%20to%20a,PC%20laptop%20with%2016GB%20RAM). It was obviously concluded this was false.

So yeah, if for some reason maybe you have some app that seems to be Mac Only like Final Cut Pro (seems to be a key reason most youtubers seem to love it) you'll have to cough up a lot of dough, and if it really is for video editing, you're gonna need a LOT more RAM.

So yeah, I definietely don't recommend MacOS to any type of user or field. I don't see any pro that MacOS has over other OS's for any field or use case. Their hardware and battery life is pretty good however, so as a portable device for just getting by, it should be reasonable, and if the issues presented above aren't too important to you, Macs are decently secure and well rounded, often having similar build quality and rarely diverging from their main design, so you know what to expect.
