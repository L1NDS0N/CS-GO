@CHCP 65001 >nul
::UTF-8
@echo off
cls

setx CSGO "steam://rungameid/730// -novid +exec autoexec.cfg"
cls

@echo Busque o SteamID64 do seu perfil, no site: http://abre.ai/steamidfinder, então no site, insira no campo de busca o Id alfanumérico que aparece no fim da URL do seu perfil da Steam
set /p SteamID64=Insira SteamID64 do seu perfil: 

xcopy "..\Counter-Strike Global Offensive.url" "%USERPROFILE%\Desktop\" /F /y /L
pause
xcopy "..\local" "%systemdrive%\Program Files (x86)\Steam\userdata\%SteamID64%\730\local\" /E /F /y
xcopy "..\local" "%systemdrive%\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\" /E /F /y

"..\README.md"
pause
:: %CSGO%