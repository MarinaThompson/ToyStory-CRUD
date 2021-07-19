USE USE [ToyStory_CRUDContext-91c4841a-159e-430b-bea3-5266a7a38270]
GO

/****** Object: Table [dbo].[Cenario] Script Date: 19/07/2021 11:06:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE [dbo].[Cenario];


GO
CREATE TABLE [dbo].[Cenario] (
    [Id]   INT            IDENTITY (1, 1) NOT NULL,
    [Nome] NVARCHAR (MAX) NULL
);

INSERT INTO [dbo].[Cenario] (
    [Nome] )
VALUES
    ('Quarto do Andy'),
    ('Casa do Bonnie')

/----------------------------------------------------------------------------/

USE [ToyStory_CRUDContext-91c4841a-159e-430b-bea3-5266a7a38270]
GO

/****** Object: Table [dbo].[Personagem] Script Date: 19/07/2021 11:10:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE [dbo].[Personagem];


GO
CREATE TABLE [dbo].[Personagem] (
    [ID]        INT            IDENTITY (1, 1) NOT NULL,
    [Nome]      NVARCHAR (MAX) NOT NULL,
    [Tipo]      NVARCHAR (MAX) NOT NULL,
    [Fala]      NVARCHAR (MAX) NULL,
    [Foto]      NVARCHAR (MAX) NOT NULL,
    [CenarioId] INT            NULL
);




