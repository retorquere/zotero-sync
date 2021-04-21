export declare namespace Zotero {
  namespace Item {
    interface Artwork {
      itemType: 'Artwork'
      key: string
      title: string
      creators: { creatorType: 'artist' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      artworkMedium: string
      artworkSize: string
      date: string
      language: string
      shortTitle: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface AudioRecording {
      itemType: 'AudioRecording'
      key: string
      title: string
      creators: { creatorType: 'performer' | 'composer' | 'contributor' | 'wordsBy', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      audioRecordingFormat: string
      seriesTitle: string
      volume: string
      numberOfVolumes: string
      place: string
      label: string
      date: string
      runningTime: string
      language: string
      ISBN: string
      shortTitle: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Bill {
      itemType: 'Bill'
      key: string
      title: string
      creators: { creatorType: 'sponsor' | 'contributor' | 'cosponsor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      billNumber: string
      code: string
      codeVolume: string
      section: string
      codePages: string
      legislativeBody: string
      session: string
      history: string
      date: string
      language: string
      url: string
      accessDate: string
      shortTitle: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface BlogPost {
      itemType: 'BlogPost'
      key: string
      title: string
      creators: { creatorType: 'author' | 'commenter' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      blogTitle: string
      websiteType: string
      date: string
      url: string
      accessDate: string
      language: string
      shortTitle: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Book {
      itemType: 'Book'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      series: string
      seriesNumber: string
      volume: string
      numberOfVolumes: string
      edition: string
      place: string
      publisher: string
      date: string
      numPages: string
      language: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface BookSection {
      itemType: 'BookSection'
      key: string
      title: string
      creators: { creatorType: 'author' | 'bookAuthor' | 'contributor' | 'editor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      bookTitle: string
      series: string
      seriesNumber: string
      volume: string
      numberOfVolumes: string
      edition: string
      place: string
      publisher: string
      date: string
      pages: string
      language: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Case {
      itemType: 'Case'
      key: string
      caseName: string
      creators: { creatorType: 'author' | 'contributor' | 'counsel', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      court: string
      dateDecided: string
      docketNumber: string
      reporter: string
      reporterVolume: string
      firstPage: string
      history: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface ComputerProgram {
      itemType: 'ComputerProgram'
      key: string
      title: string
      creators: { creatorType: 'programmer' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      seriesTitle: string
      versionNumber: string
      date: string
      system: string
      place: string
      company: string
      programmingLanguage: string
      ISBN: string
      shortTitle: string
      url: string
      rights: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      accessDate: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface ConferencePaper {
      itemType: 'ConferencePaper'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      date: string
      proceedingsTitle: string
      conferenceName: string
      place: string
      publisher: string
      volume: string
      pages: string
      series: string
      language: string
      DOI: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface DictionaryEntry {
      itemType: 'DictionaryEntry'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      dictionaryTitle: string
      series: string
      seriesNumber: string
      volume: string
      numberOfVolumes: string
      edition: string
      place: string
      publisher: string
      date: string
      pages: string
      language: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Document {
      itemType: 'Document'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      publisher: string
      date: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Email {
      itemType: 'Email'
      key: string
      subject: string
      creators: { creatorType: 'author' | 'contributor' | 'recipient', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      date: string
      shortTitle: string
      url: string
      accessDate: string
      language: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface EncyclopediaArticle {
      itemType: 'EncyclopediaArticle'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      encyclopediaTitle: string
      series: string
      seriesNumber: string
      volume: string
      numberOfVolumes: string
      edition: string
      place: string
      publisher: string
      date: string
      pages: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      language: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Film {
      itemType: 'Film'
      key: string
      title: string
      creators: { creatorType: 'director' | 'contributor' | 'producer' | 'scriptwriter', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      distributor: string
      date: string
      genre: string
      videoRecordingFormat: string
      runningTime: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface ForumPost {
      itemType: 'ForumPost'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      forumTitle: string
      postType: string
      date: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Hearing {
      itemType: 'Hearing'
      key: string
      title: string
      creators: { creatorType: 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      committee: string
      place: string
      publisher: string
      numberOfVolumes: string
      documentNumber: string
      pages: string
      legislativeBody: string
      session: string
      history: string
      date: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface InstantMessage {
      itemType: 'InstantMessage'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'recipient', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      date: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Interview {
      itemType: 'Interview'
      key: string
      title: string
      creators: { creatorType: 'interviewee' | 'contributor' | 'interviewer' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      date: string
      interviewMedium: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface JournalArticle {
      itemType: 'JournalArticle'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      publicationTitle: string
      volume: string
      issue: string
      pages: string
      date: string
      series: string
      seriesTitle: string
      seriesText: string
      journalAbbreviation: string
      language: string
      DOI: string
      ISSN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Letter {
      itemType: 'Letter'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'recipient', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      letterType: string
      date: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface MagazineArticle {
      itemType: 'MagazineArticle'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'reviewedAuthor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      publicationTitle: string
      volume: string
      issue: string
      date: string
      pages: string
      language: string
      ISSN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Manuscript {
      itemType: 'Manuscript'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      manuscriptType: string
      place: string
      date: string
      numPages: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Map {
      itemType: 'Map'
      key: string
      title: string
      creators: { creatorType: 'cartographer' | 'contributor' | 'seriesEditor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      mapType: string
      scale: string
      seriesTitle: string
      edition: string
      place: string
      publisher: string
      date: string
      language: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface NewspaperArticle {
      itemType: 'NewspaperArticle'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'reviewedAuthor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      publicationTitle: string
      place: string
      edition: string
      date: string
      section: string
      pages: string
      language: string
      shortTitle: string
      ISSN: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Note {
      itemType: 'Note'
      key: string
      note: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Patent {
      itemType: 'Patent'
      key: string
      title: string
      creators: { creatorType: 'inventor' | 'attorneyAgent' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      place: string
      country: string
      assignee: string
      issuingAuthority: string
      patentNumber: string
      filingDate: string
      pages: string
      applicationNumber: string
      priorityNumbers: string
      issueDate: string
      references: string
      legalStatus: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Podcast {
      itemType: 'Podcast'
      key: string
      title: string
      creators: { creatorType: 'podcaster' | 'contributor' | 'guest', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      seriesTitle: string
      episodeNumber: string
      audioFileType: string
      runningTime: string
      url: string
      accessDate: string
      language: string
      shortTitle: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Presentation {
      itemType: 'Presentation'
      key: string
      title: string
      creators: { creatorType: 'presenter' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      presentationType: string
      date: string
      place: string
      meetingName: string
      url: string
      accessDate: string
      language: string
      shortTitle: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface RadioBroadcast {
      itemType: 'RadioBroadcast'
      key: string
      title: string
      creators: { creatorType: 'director' | 'castMember' | 'contributor' | 'guest' | 'producer' | 'scriptwriter', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      programTitle: string
      episodeNumber: string
      audioRecordingFormat: string
      place: string
      network: string
      date: string
      runningTime: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Report {
      itemType: 'Report'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'seriesEditor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      reportNumber: string
      reportType: string
      seriesTitle: string
      place: string
      institution: string
      date: string
      pages: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Statute {
      itemType: 'Statute'
      key: string
      nameOfAct: string
      creators: { creatorType: 'author' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      code: string
      codeNumber: string
      publicLawNumber: string
      dateEnacted: string
      pages: string
      section: string
      session: string
      history: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface TvBroadcast {
      itemType: 'TvBroadcast'
      key: string
      title: string
      creators: { creatorType: 'director' | 'castMember' | 'contributor' | 'guest' | 'producer' | 'scriptwriter', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      programTitle: string
      episodeNumber: string
      videoRecordingFormat: string
      place: string
      network: string
      date: string
      runningTime: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Thesis {
      itemType: 'Thesis'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      thesisType: string
      university: string
      place: string
      date: string
      numPages: string
      language: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface VideoRecording {
      itemType: 'VideoRecording'
      key: string
      title: string
      creators: { creatorType: 'director' | 'castMember' | 'contributor' | 'producer' | 'scriptwriter', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      videoRecordingFormat: string
      seriesTitle: string
      volume: string
      numberOfVolumes: string
      place: string
      studio: string
      date: string
      runningTime: string
      language: string
      ISBN: string
      shortTitle: string
      url: string
      accessDate: string
      archive: string
      archiveLocation: string
      libraryCatalog: string
      callNumber: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    interface Webpage {
      itemType: 'Webpage'
      key: string
      title: string
      creators: { creatorType: 'author' | 'contributor' | 'translator', name?: string, firstName?: string, lastName?: string }[]
      abstractNote: string
      websiteTitle: string
      websiteType: string
      date: string
      shortTitle: string
      url: string
      accessDate: string
      language: string
      rights: string
      extra: string
      tags: string[]
      collections: string[]
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
    type Any = Artwork | AudioRecording | Bill | BlogPost | Book | BookSection | Case | ComputerProgram | ConferencePaper | DictionaryEntry | Document | Email | EncyclopediaArticle | Film | ForumPost | Hearing | InstantMessage | Interview | JournalArticle | Letter | MagazineArticle | Manuscript | Map | NewspaperArticle | Note | Patent | Podcast | Presentation | RadioBroadcast | Report | Statute | TvBroadcast | Thesis | VideoRecording | Webpage
  }

  interface Collection {
    key: string;
    version: number;
    library: {
      type: string;
      id: number;
      name: string;
      links: Record<'self' | 'alternate' | 'up', { href: string, type: string }>
    }
    links: Record<'self' | 'alternate' | 'up', { href: string, type: string }>
    meta: {
      numCollections: number;
      numItems: number;
    }
    data: {
      key: string;
      version: number;
      name: string;
      parentCollection: false | string;
      relations: Record<'owl:sameAs' | 'dc:replaces' | 'dc:relation', string>
    }
  }

  interface Library {
    version: number
    name: string
    save: (name: string, version: number) => Promise<void>
    remove_collections: (keys: string[]) => Promise<void>
    add_collection: (collection: Collection) => Promise<void>
    add: (item: Item.Any) => Promise<void>
    remove: (keys: string[]) => Promise<void>
  }

  interface Store {
    libraries: string[] // user_or_group_prefix
    remove: (user_or_group_prefix: string) => Promise<void>
    get: (user_or_group_prefix: string) => Promise<Library>
  }
}
