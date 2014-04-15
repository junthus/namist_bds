# namist_bds

## usage
+ __restart__
    + (forever로 서버가 켜져 있을 경우) forever stop 
    + git pull 
    + npm install 
    + forever start
+ __stop__
    + forever stop

## cautions !
+ forever 모듈을 전역으로 설치해야 합니다
    + __sudo npm install forever -g__
+ namist 폴더와 namist_bds 는 같은 디렉터리에 위치해야합니다.