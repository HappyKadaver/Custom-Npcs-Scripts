Custom-Npcs-Scripts
===================

Custom-Npcs-Scripts is a collection of Javascript scripts for the Minecraft-Mod <a href="http://www.kodevelopment.nl/minecraft/customnpcs">Custom Npcs</a>.
I created this project after watching Etho's Modded Minecraft Series. I really liked the ideas he spoke about and thought it would be an interesting challange.
I am not affilated with Etho in any way. I am developing on this in my free time.

How to use:
===========
If you want to use my Scripts just download this repository as zip(see on the right) and put the scripts in the scripts folder of Custom Npcs. You can find the
scripts folder in your world save or just use the button in the scripting interface of any NPC in your world.

At the moment I only have a basic script for NPCs to roam around several locations. In Order to use it you have to add all files in the folders "any" and "update"
to your NPCs update script(on the bottom right) and call the function roam with an array of RoamPoints(see the file example/npc/etho.js for an example how this 
could look like).

If you are only testing this you can also add the files in the folder example and call roam(ROAM_LOCATIONS()) in the update script of the NPC.
The NPC will then start roaming close to 0, 4, 0. If you want more detailed Information about what the NPC is doing then set the variable DEBUG = true in the update
script.

I am going to go more indepth in the future if/when I find the time.
