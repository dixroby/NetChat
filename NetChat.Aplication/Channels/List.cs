using MediatR;
using Microsoft.EntityFrameworkCore;
using NetChat.Domain;
using NetChat.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace NetChat.Aplication
{
    public class List
    {
        public class Query : IRequest<List<Channel>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Channel>>
        {
            private DataContext _context;
            public Handler(DataContext dataContext)
            {
                _context = dataContext ?? throw new ArgumentNullException();
            }
            public async Task<List<Channel>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Channels.ToListAsync();
            }
        }
    }
}