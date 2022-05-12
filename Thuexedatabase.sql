/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     5/5/2022 5:31:06 PM                          */
/*==============================================================*/
drop database if exists thuexe;

create database thuexe;

use thuexe;

drop table if exists CHITIETTHUEXE;

drop table if exists DIEUKHOAN;

drop table if exists DIEUKHOAN_XE;

drop table if exists TAIXE;

drop table if exists THANHTOAN;

drop table if exists THUEXE;

drop table if exists VITRI;

drop table if exists XE;

/*==============================================================*/
/* Table: CHITIETTHUEXE                                         */
/*==============================================================*/
create table CHITIETTHUEXE
(
   CHITIETTHUEXEID      int not null AUTO_INCREMENT,
   THUEXEID             int,
   TENLIENHE            varchar(50),
   SODIENTHOAILIENHE    varchar(10),
   EMAILLIEMHE          varchar(25),
   STATUS               blob,
   TEN                  varchar(50),
   SODIENTHOAI          varchar(10),
   DANHXUNG             varchar(10),
   primary key (CHITIETTHUEXEID)
);

/*==============================================================*/
/* Table: DIEUKHOAN                                             */
/*==============================================================*/
create table DIEUKHOAN
(
   DIEUKHOANID          int not null AUTO_INCREMENT,
   DIEUKHOAN            varchar(100),
   primary key (DIEUKHOANID)
);

/*==============================================================*/
/* Table: DIEUKHOAN_XE                                          */
/*==============================================================*/
create table DIEUKHOAN_XE
(
   DIEUKHOANID          int,
   XEID                 int
);

/*==============================================================*/
/* Table: TAIXE                                                 */
/*==============================================================*/
create table TAIXE
(
   XEID                 int,
   TAIXEID              int AUTO_INCREMENT,
   NAME                 varchar(50),
   BEST_DRIVER          blob,
   STATUS_VACCINATED    blob,
   primary key (TAIXEID)
);

/*==============================================================*/
/* Table: THANHTOAN                                             */
/*==============================================================*/
create table THANHTOAN
(
   THANHTOANID          int not null AUTO_INCREMENT,
   CHITIETTHUEXEID      int,
   SOTHE                varchar(10),
   HIEULUC              date,
   CHUTHE               varchar(50),
   CSV                  varchar(3),
   primary key (THANHTOANID)
);

/*==============================================================*/
/* Table: THUEXE                                                */
/*==============================================================*/
create table THUEXE
(
   THUEXEID             int not null AUTO_INCREMENT,
   XEID                 int,
   GIA                  float,
   NOILAY               varchar(100),
   NOITRA               varchar(100),
   NGAYLAY              date,
   NGAYTRA              date,
   GIOLAY               time,
   GIOTRA               time,
   USERID               varchar(50),
   VOUCHERID            varchar(50),
   COMBOID              varchar(50),
   primary key (THUEXEID)
);

/*==============================================================*/
/* Table: VITRI                                                 */
/*==============================================================*/
create table VITRI
(
   VITRIID              int not null AUTO_INCREMENT,
   COUNTRY              varchar(50),
   PROVINCE             varchar(50),
   CITY                 varchar(50),
   primary key (VITRIID)
);

/*==============================================================*/
/* Table: XE                                                    */
/*==============================================================*/
create table XE
(
   XEID                 int not null AUTO_INCREMENT,
   VITRIID              int,
   TENXE                varchar(50),
   GIAXE                float,
   HINHXE               varchar(100),
   MAUXE                varchar(50),
   LOAIXE               varchar(20),
   SOGHE                int,
   SOHANHLY             int,
   DIACHIVANPHONG       varchar(50),
   PARTNERID            varchar(100),
   primary key (XEID)
);

alter table CHITIETTHUEXE add constraint FK_RELATIONSHIP_5 foreign key (THUEXEID)
      references THUEXE (THUEXEID) on delete restrict on update restrict;

alter table DIEUKHOAN_XE add constraint FK_RELATIONSHIP_1 foreign key (DIEUKHOANID)
      references DIEUKHOAN (DIEUKHOANID) on delete restrict on update restrict;

alter table DIEUKHOAN_XE add constraint FK_RELATIONSHIP_2 foreign key (XEID)
      references XE (XEID) on delete restrict on update restrict;

alter table TAIXE add constraint FK_RELATIONSHIP_7 foreign key (XEID)
      references XE (XEID) on delete restrict on update restrict;

alter table THANHTOAN add constraint FK_RELATIONSHIP_6 foreign key (CHITIETTHUEXEID)
      references CHITIETTHUEXE (CHITIETTHUEXEID) on delete restrict on update restrict;

alter table THUEXE add constraint FK_RELATIONSHIP_4 foreign key (XEID)
      references XE (XEID) on delete restrict on update restrict;

alter table XE add constraint FK_RELATIONSHIP_3 foreign key (VITRIID)
      references VITRI (VITRIID) on delete restrict on update restrict;

