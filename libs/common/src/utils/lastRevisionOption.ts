interface Revision {
  revisionDate: string;
  revisionSequence: string;
}

export const lastRevisionOption = (urn: string, revision: Revision) => {
  return {
    $or: [
      {
        $and: [
          { 'urn.urn': { $eq: urn } },
          { 'urn.revision.revisionDate': { $eq: revision.revisionDate } },
          {
            'urn.revision.revisionSequence': {
              $lte: revision.revisionSequence,
            },
          },
        ],
      },
      {
        $and: [{ 'urn.urn': { $eq: urn } }, { 'urn.revision.revisionDate': { $lt: revision.revisionDate } }],
      },
    ],
  };
};
