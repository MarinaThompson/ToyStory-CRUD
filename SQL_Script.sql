USE [ToyStory_CRUDContext-a7c5c0ce-2a50-4e5d-9e6c-d31ecbb27f2a]
GO

/****** Object: Table [dbo].[Personagem] Script Date: 18/07/2021 11:05:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE [dbo].[Personagem];


GO
CREATE TABLE [dbo].[Personagem] (
    [ID]   INT            IDENTITY (1, 1) NOT NULL,
    [Nome] NVARCHAR (MAX) NOT NULL,
    [Tipo] NVARCHAR (MAX) NOT NULL,
    [Fala] NVARCHAR (MAX) NOT NULL,
    [Foto] NVARCHAR (MAX) NULL
);


